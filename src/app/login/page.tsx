// app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Login</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input type="password" id="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-all duration-200 font-semibold">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
