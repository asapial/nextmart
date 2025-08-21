import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Dashboard Overview
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Users Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-full text-3xl">
            <FaUsers />
          </div>
          <div>
            <p className="text-gray-500">Total Users</p>
            <h2 className="text-2xl font-bold">1,250</h2>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition">
          <div className="p-4 bg-green-100 text-green-600 rounded-full text-3xl">
            <FaShoppingCart />
          </div>
          <div>
            <p className="text-gray-500">Orders</p>
            <h2 className="text-2xl font-bold">320</h2>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition">
          <div className="p-4 bg-yellow-100 text-yellow-600 rounded-full text-3xl">
            <FaDollarSign />
          </div>
          <div>
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-2xl font-bold">$8,450</h2>
          </div>
        </div>

        {/* Growth Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition">
          <div className="p-4 bg-purple-100 text-purple-600 rounded-full text-3xl">
            <FaChartLine />
          </div>
          <div>
            <p className="text-gray-500">Growth</p>
            <h2 className="text-2xl font-bold">+12%</h2>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-10 bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Recent Activity
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>✅ New user registered</li>
          <li>🛒 Order #2345 placed</li>
          <li>💳 Payment received from John Doe</li>
          <li>📦 Product "Smart Watch" added</li>
        </ul>
      </div>
    </div>
  );
}
