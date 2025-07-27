"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = [
  { key: "profile", label: "Profile" },
  { key: "address", label: "Address" },
  { key: "password", label: "Change Password" },
  { key: "orders", label: "Orders" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  // Profile form state
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [profileErrors, setProfileErrors] = useState<any>({});
  const [profileSaved, setProfileSaved] = useState(false);

  // Address form state
  const [address, setAddress] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [addressErrors, setAddressErrors] = useState<any>({});
  const [addressSaved, setAddressSaved] = useState(false);

  // Password form state
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [passwordErrors, setPasswordErrors] = useState<any>({});
  const [passwordSaved, setPasswordSaved] = useState(false);

  // Handlers for each form
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  // Validation and submit for each form
  const validateProfile = () => {
    const e: any = {};
    if (!profile.name) e.name = "Required";
    if (!profile.email) e.email = "Required";
    if (!profile.phone) e.phone = "Required";
    return e;
  };
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validateProfile();
    setProfileErrors(v);
    if (Object.keys(v).length === 0) setProfileSaved(true);
  };

  const validateAddress = () => {
    const e: any = {};
    if (!address.address) e.address = "Required";
    if (!address.city) e.city = "Required";
    if (!address.state) e.state = "Required";
    if (!address.zip) e.zip = "Required";
    if (!address.country) e.country = "Required";
    return e;
  };
  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validateAddress();
    setAddressErrors(v);
    if (Object.keys(v).length === 0) setAddressSaved(true);
  };

  const validatePassword = () => {
    const e: any = {};
    if (!password.current) e.current = "Required";
    if (!password.new) e.new = "Required";
    if (!password.confirm) e.confirm = "Required";
    if (password.new && password.confirm && password.new !== password.confirm) e.confirm = "Passwords do not match";
    return e;
  };
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validatePassword();
    setPasswordErrors(v);
    if (Object.keys(v).length === 0) setPasswordSaved(true);
  };

  const mockOrders = [
    { id: "ORD-1001", date: "2024-05-01", total: 129.99, status: "Delivered" },
    { id: "ORD-1002", date: "2024-04-15", total: 89.50, status: "Shipped" },
    { id: "ORD-1003", date: "2024-03-28", total: 49.00, status: "Cancelled" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-16 bg-white rounded shadow flex min-h-[500px]">
      {/* Sidebar */}
      <aside className="w-56 border-r p-8 bg-gray-50 flex flex-col gap-2">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`text-left px-4 py-2 rounded transition font-medium ${activeTab === tab.key ? "bg-primary text-white" : "hover:bg-gray-200 text-gray-700"}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeTab === "profile" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Profile</h2>
            {profileSaved && <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">Profile saved!</div>}
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Full Name *</label>
                <input name="name" value={profile.name} onChange={handleProfileChange} className="w-full border rounded px-3 py-2" />
                {profileErrors.name && <span className="text-red-500 text-xs">{profileErrors.name}</span>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Email *</label>
                <input name="email" type="email" value={profile.email} onChange={handleProfileChange} className="w-full border rounded px-3 py-2" />
                {profileErrors.email && <span className="text-red-500 text-xs">{profileErrors.email}</span>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone *</label>
                <input name="phone" value={profile.phone} onChange={handleProfileChange} className="w-full border rounded px-3 py-2" />
                {profileErrors.phone && <span className="text-red-500 text-xs">{profileErrors.phone}</span>}
              </div>
              <Button type="submit" className="w-full mt-4">Save</Button>
            </form>
          </>
        )}
        {activeTab === "address" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Address</h2>
            {addressSaved && <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">Address saved!</div>}
            <form onSubmit={handleAddressSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Address *</label>
                <input name="address" value={address.address} onChange={handleAddressChange} className="w-full border rounded px-3 py-2" />
                {addressErrors.address && <span className="text-red-500 text-xs">{addressErrors.address}</span>}
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">City *</label>
                  <input name="city" value={address.city} onChange={handleAddressChange} className="w-full border rounded px-3 py-2" />
                  {addressErrors.city && <span className="text-red-500 text-xs">{addressErrors.city}</span>}
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">State/Province *</label>
                  <input name="state" value={address.state} onChange={handleAddressChange} className="w-full border rounded px-3 py-2" />
                  {addressErrors.state && <span className="text-red-500 text-xs">{addressErrors.state}</span>}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Zip/Postal Code *</label>
                  <input name="zip" value={address.zip} onChange={handleAddressChange} className="w-full border rounded px-3 py-2" />
                  {addressErrors.zip && <span className="text-red-500 text-xs">{addressErrors.zip}</span>}
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Country *</label>
                  <input name="country" value={address.country} onChange={handleAddressChange} className="w-full border rounded px-3 py-2" />
                  {addressErrors.country && <span className="text-red-500 text-xs">{addressErrors.country}</span>}
                </div>
              </div>
              <Button type="submit" className="w-full mt-4">Save</Button>
            </form>
          </>
        )}
        {activeTab === "password" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Change Password</h2>
            {passwordSaved && <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">Password changed!</div>}
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Current Password *</label>
                <input name="current" type="password" value={password.current} onChange={handlePasswordChange} className="w-full border rounded px-3 py-2" />
                {passwordErrors.current && <span className="text-red-500 text-xs">{passwordErrors.current}</span>}
              </div>
              <div>
                <label className="block mb-1 font-medium">New Password *</label>
                <input name="new" type="password" value={password.new} onChange={handlePasswordChange} className="w-full border rounded px-3 py-2" />
                {passwordErrors.new && <span className="text-red-500 text-xs">{passwordErrors.new}</span>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Confirm New Password *</label>
                <input name="confirm" type="password" value={password.confirm} onChange={handlePasswordChange} className="w-full border rounded px-3 py-2" />
                {passwordErrors.confirm && <span className="text-red-500 text-xs">{passwordErrors.confirm}</span>}
              </div>
              <Button type="submit" className="w-full mt-4">Change Password</Button>
            </form>
          </>
        )}
        {activeTab === "orders" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Your Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border rounded shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-2 px-4">Order ID</th>
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Total</th>
                    <th className="py-2 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOrders.map(order => (
                    <tr key={order.id} className="border-b">
                      <td className="py-2 px-4 font-mono">{order.id}</td>
                      <td className="py-2 px-4">{order.date}</td>
                      <td className="py-2 px-4">${order.total.toFixed(2)}</td>
                      <td className="py-2 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          order.status === "Delivered" ? "bg-green-100 text-green-700" :
                          order.status === "Shipped" ? "bg-blue-100 text-blue-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  );
} 