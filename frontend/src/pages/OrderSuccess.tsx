const OrderSuccess = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="bg-gray-100 p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h2 className="text-3xl font-bold text-black mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-600">
          Thank you for your purchase. Your order has been confirmed and will be processed shortly.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
