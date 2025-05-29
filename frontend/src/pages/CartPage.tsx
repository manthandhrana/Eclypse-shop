import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;


const CartPage: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    street: '',
    apt: '',
    state: '',
    zip: ''
  });
  const [orderSummary, setOrderSummary] = useState<any | null>(null);  
  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchOrderSummary = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/price`, { withCredentials: true });
        setOrderSummary(res.data.order);
      } catch (err) {
        console.error('Failed to fetch order summary:', err);
      }
    };

    fetchOrderSummary();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/cart`, { withCredentials: true });


        const summary = res.data.order;
        setForm(summary);

        // Optional: Store in localStorage or update UI
        localStorage.setItem('orderSummary', JSON.stringify(summary));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

const handlePlaceOrder = async () => {

  try {
    alert('Order placed successfully!');
    navigate('/order-success'); 
  } catch (err) {
    console.error(err);
  }
};


  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/cart`, form, { withCredentials: true });
      alert('Address and Order Saved!');

      const summary = res.data.orderSummary;

      // Optional: Store in localStorage or update UI
      localStorage.setItem('orderSummary', JSON.stringify(summary));
    } catch (err) {
      alert('Error saving address');
    }
  };


  return (
    <div className="flex bg-white mt-20 rouded-border text-black placeholder-black flex-col md:flex-row p-8 gap-8">
      {/* Address Form */}
      <div className="border p-6 rounded-md w-full md:w-2/3">
        <h2 className="text-lg font-semibold mb-4">Add New Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="border p-2" />
          <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="border p-2" />
        </div>
        <input name="street" placeholder="Street Address" value={form.street} onChange={handleChange} className="border p-2 w-full mb-4" />
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input name="apt" placeholder="Apt Number" value={form.apt} onChange={handleChange} className="border p-2" />
          <input name="state" placeholder="State" value={form.state} onChange={handleChange} className="border p-2" />
          <input name="zip" placeholder="Zip" value={form.zip} onChange={handleChange} className="border p-2" />
        </div>
        <div className="flex gap-4">
          <button className="border px-4 py-2">Cancel</button>
          <button onClick={handleSubmit} className="bg-black text-white px-4 py-2">Save This Address</button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border bg-gray-300 p-6 rounded-md w-full md:w-1/3">
        <p className="text-sm text-gray-600 mb-4">
          By placing your order, you agree to our company Privacy policy and Conditions of use.
        </p>

        {orderSummary ? (
          <>
            <div className="text-sm space-y-2">
              {orderSummary.items?.map((item: any, index: number) => (
                <div key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))}
              <div className="flex justify-between"><span>Shipping and handling</span><span>{orderSummary.shipping}</span></div>
              <div className="flex justify-between"><span>Before tax</span><span>{orderSummary.beforeTax}</span></div>
              <div className="flex justify-between"><span>Tax Collected:</span><span>{orderSummary.tax}</span></div>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 border-t pt-4">
              <span>Order Total:</span>
              <span>{orderSummary.total}</span>
            </div>
          </>
        ) : (
          <p>Loading summary...</p>
        )}

        <button  onClick={handlePlaceOrder} className="mt-4 bg-black text-white w-full py-2">Place Order</button>
      </div>

    </div>
  );
};

export default CartPage;
