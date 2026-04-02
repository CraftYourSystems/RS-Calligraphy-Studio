import { useState, useCallback } from 'react';

/**
 * useRazorpay Custom Hook
 * 
 * Handles script loading, order creation, and payment verification.
 */
export const useRazorpay = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    // Helper: Load Razorpay script dynamically
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    /**
     * Initializes the Razorpay checkout process.
     * 
     * @param {Object} userData - Contains name, email, phone, and workshopId.
     */
    const initiatePayment = useCallback(async (userData) => {
        setIsProcessing(true);
        setError(null);

        try {
            // 1. Load the Razorpay script
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
            if (!res) {
                throw new Error('Razorpay SDK failed to load. Check your internet connection.');
            }

            // 2. Create an order on the backend
            // POST /api/create-order
            const orderResponse = await fetch('/api/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: userData.fullName,
                    email: userData.email,
                    phone: userData.phone,
                    workshopId: userData.workshopId,
                }),
            });

            if (!orderResponse.ok) {
                const errorData = await orderResponse.json();
                throw new Error(errorData.message || 'Failed to create payment order.');
            }

            const orderData = await orderResponse.json();
            const { orderId, amount, currency } = orderData;

            // 3. Configure Razorpay options
            // Note: Using import.meta.env for Vite, with a fallback to process.env as requested.
            const razorpayKey = import.meta.env?.VITE_RAZORPAY_KEY || process.env?.REACT_APP_RAZORPAY_KEY;

            const options = {
                key: razorpayKey,
                amount: amount.toString(),
                currency: currency || 'INR',
                name: 'RS Calligraphy Studio',
                description: `Enrollment for ${userData.workshopTitle}`,
                order_id: orderId,
                handler: async (response) => {
                    // 4. Verify payment on the backend
                    // POST /api/verify-payment
                    try {
                        const verifyResponse = await fetch('/api/verify-payment', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                            }),
                        });

                        if (verifyResponse.ok) {
                            setIsSuccess(true);
                        } else {
                            const errorData = await verifyResponse.json();
                            throw new Error(errorData.message || 'Payment verification failed.');
                        }
                    } catch (err) {
                        setError(err.message);
                    } finally {
                        setIsProcessing(false);
                    }
                },
                prefill: {
                    name: userData.fullName,
                    email: userData.email,
                    contact: userData.phone,
                },
                theme: {
                    color: '#2c1f0e', // T.espresso equivalent
                },
                modal: {
                    ondismiss: () => {
                        setIsProcessing(false);
                    },
                },
            };

            const rzp = new window.Razorpay(options);

            rzp.on('payment.failed', function (response) {
                setError(response.error.description || 'Payment failed.');
                setIsProcessing(false);
            });

            rzp.open();
        } catch (err) {
            setError(err.message);
            setIsProcessing(false);
        }
    }, []);

    return {
        initiatePayment,
        isProcessing,
        error,
        isSuccess,
    };
};
