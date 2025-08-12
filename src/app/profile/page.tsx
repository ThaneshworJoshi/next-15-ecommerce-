"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { PROFILE_TABS, MOCK_ORDERS, ORDER_STATUS_STYLES } from "@/constants";
import { ProfileTabKey } from "@/types";
import { 
  profileSchema, 
  addressSchema, 
  passwordSchema,
  ProfileFormData,
  AddressFormData,
  PasswordFormData
} from "@/schemas";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTabKey>("profile");
  const [profileSaved, setProfileSaved] = useState(false);
  const [addressSaved, setAddressSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  // Profile form
  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // Address form
  const {
    register: registerAddress,
    handleSubmit: handleAddressSubmit,
    formState: { errors: addressErrors },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });

  // Password form
  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    reset: resetPassword,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      current: "",
      new: "",
      confirm: "",
    },
  });

  // Form submission handlers
  const onProfileSubmit = (data: ProfileFormData) => {
    console.log("Profile data:", data);
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
    // Here you would typically make an API call to save the profile
  };

  const onAddressSubmit = (data: AddressFormData) => {
    console.log("Address data:", data);
    setAddressSaved(true);
    setTimeout(() => setAddressSaved(false), 3000);
    // Here you would typically make an API call to save the address
  };

  const onPasswordSubmit = (data: PasswordFormData) => {
    console.log("Password data:", data);
    setPasswordSaved(true);
    setTimeout(() => setPasswordSaved(false), 3000);
    resetPassword(); // Clear password form after successful submission
    // Here you would typically make an API call to change the password
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 bg-white rounded shadow flex min-h-[500px]">
      {/* Sidebar */}
      <aside className="w-56 border-r p-8 bg-gray-50 flex flex-col gap-2">
        {PROFILE_TABS.map(tab => (
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
            {profileSaved && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">
                Profile saved successfully!
              </div>
            )}
            <form onSubmit={handleProfileSubmit(onProfileSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Full Name *</label>
                <input
                  {...registerProfile("name")}
                  className={`w-full border rounded px-3 py-2 ${
                    profileErrors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your full name"
                />
                {profileErrors.name && (
                  <span className="text-red-500 text-xs">{profileErrors.name.message}</span>
                )}
              </div>
              
              <div>
                <label className="block mb-1 font-medium">Email *</label>
                <input
                  {...registerProfile("email")}
                  type="email"
                  className={`w-full border rounded px-3 py-2 ${
                    profileErrors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your email address"
                />
                {profileErrors.email && (
                  <span className="text-red-500 text-xs">{profileErrors.email.message}</span>
                )}
              </div>
              
              <div>
                <label className="block mb-1 font-medium">Phone *</label>
                <input
                  {...registerProfile("phone")}
                  className={`w-full border rounded px-3 py-2 ${
                    profileErrors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your phone number"
                />
                {profileErrors.phone && (
                  <span className="text-red-500 text-xs">{profileErrors.phone.message}</span>
                )}
              </div>
              
              <Button type="submit" className="w-full mt-4">
                Save Profile
              </Button>
            </form>
          </>
        )}

        {activeTab === "address" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Address</h2>
            {addressSaved && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">
                Address saved successfully!
              </div>
            )}
            <form onSubmit={handleAddressSubmit(onAddressSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Address *</label>
                <input
                  {...registerAddress("address")}
                  className={`w-full border rounded px-3 py-2 ${
                    addressErrors.address ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your street address"
                />
                {addressErrors.address && (
                  <span className="text-red-500 text-xs">{addressErrors.address.message}</span>
                )}
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">City *</label>
                  <input
                    {...registerAddress("city")}
                    className={`w-full border rounded px-3 py-2 ${
                      addressErrors.city ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your city"
                  />
                  {addressErrors.city && (
                    <span className="text-red-500 text-xs">{addressErrors.city.message}</span>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">State/Province *</label>
                  <input
                    {...registerAddress("state")}
                    className={`w-full border rounded px-3 py-2 ${
                      addressErrors.state ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your state"
                  />
                  {addressErrors.state && (
                    <span className="text-red-500 text-xs">{addressErrors.state.message}</span>
                  )}
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Zip/Postal Code *</label>
                  <input
                    {...registerAddress("zip")}
                    className={`w-full border rounded px-3 py-2 ${
                      addressErrors.zip ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your zip code"
                  />
                  {addressErrors.zip && (
                    <span className="text-red-500 text-xs">{addressErrors.zip.message}</span>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Country *</label>
                  <input
                    {...registerAddress("country")}
                    className={`w-full border rounded px-3 py-2 ${
                      addressErrors.country ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your country"
                  />
                  {addressErrors.country && (
                    <span className="text-red-500 text-xs">{addressErrors.country.message}</span>
                  )}
                </div>
              </div>
              
              <Button type="submit" className="w-full mt-4">
                Save Address
              </Button>
            </form>
          </>
        )}

        {activeTab === "password" && (
          <>
            <h2 className="text-2xl font-bold mb-6">Change Password</h2>
            {passwordSaved && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">
                Password changed successfully!
              </div>
            )}
            <form onSubmit={handlePasswordSubmit(onPasswordSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Current Password *</label>
                <input
                  {...registerPassword("current")}
                  type="password"
                  className={`w-full border rounded px-3 py-2 ${
                    passwordErrors.current ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your current password"
                />
                {passwordErrors.current && (
                  <span className="text-red-500 text-xs">{passwordErrors.current.message}</span>
                )}
              </div>
              
              <div>
                <label className="block mb-1 font-medium">New Password *</label>
                <input
                  {...registerPassword("new")}
                  type="password"
                  className={`w-full border rounded px-3 py-2 ${
                    passwordErrors.new ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your new password"
                />
                {passwordErrors.new && (
                  <span className="text-red-500 text-xs">{passwordErrors.new.message}</span>
                )}
              </div>
              
              <div>
                <label className="block mb-1 font-medium">Confirm New Password *</label>
                <input
                  {...registerPassword("confirm")}
                  type="password"
                  className={`w-full border rounded px-3 py-2 ${
                    passwordErrors.confirm ? "border-red-500" : ""
                  }`}
                  placeholder="Confirm your new password"
                />
                {passwordErrors.confirm && (
                  <span className="text-red-500 text-xs">{passwordErrors.confirm.message}</span>
                )}
              </div>
              
              <Button type="submit" className="w-full mt-4">
                Change Password
              </Button>
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
                  {MOCK_ORDERS.map(order => (
                    <tr key={order.id} className="border-b">
                      <td className="py-2 px-4 font-mono">{order.id}</td>
                      <td className="py-2 px-4">{order.date}</td>
                      <td className="py-2 px-4">${order.total.toFixed(2)}</td>
                      <td className="py-2 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          ORDER_STATUS_STYLES[order.status]
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