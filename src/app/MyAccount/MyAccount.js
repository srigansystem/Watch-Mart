import React, { useState } from "react";
import "./MyAccount.css";

const MyAccount = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    address: "123 Luxury St, Elegance City, EX 98765",
  });

  const [orderStatus, setOrderStatus] = useState("Processing");
  const [savedItems, setSavedItems] = useState([
    { name: "Rolex Submariner", price: "$10,000" },
    { name: "Omega Speedmaster", price: "$5,000" },
  ]);

  const [trackingInfo, setTrackingInfo] = useState({
    courier: "FedEx",
    trackingNumber: "1234567890",
    status: "Shipped",
  });

  const [returns, setReturns] = useState([
    { item: "Omega Speedmaster", status: "Pending" },
  ]);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [expandedSection, setExpandedSection] = useState(null);
  const [preferences, setPreferences] = useState({
    notifications: true,
    language: "English",
  });
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validatePasswordMatch(value);
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const validatePasswordMatch = (confirmPassword) => {
    if (confirmPassword !== newPassword) {
      setPasswordError("Passwords do not match.");
    } else {
      setPasswordError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\+\-\.\(\)\/\s]*$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid phone number.");
    } else {
      setPhoneError("");
    }
  };

  const handleSavePassword = () => {
    if (!passwordError && newPassword === confirmPassword) {
      alert("Password updated successfully!");
    } else {
      alert("Please fix the errors before saving.");
    }
  };

  const handleSavePreferences = () => {
    alert("Preferences updated successfully!");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="account-dashboard-page">
      <div className="account-dashboard-container">
        <h1 className="brand-title">My Account</h1>
        <p className="tagline">Manage your orders, saved items, and more</p>

        {/* User Info Section */}
        <div className="account-info">
          <h3>Account Information</h3>
          <div className="account-field">
            <label>Name:</label>
            <span>{userInfo.name}</span>
          </div>
          <div className="account-field">
            <label>Email:</label>
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              onBlur={() => validateEmail(userInfo.email)}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="account-field">
            <label>Phone:</label>
            <input
              type="text"
              value={userInfo.phone}
              onChange={(e) =>
                setUserInfo({ ...userInfo, phone: e.target.value })
              }
              onBlur={() => validatePhone(userInfo.phone)}
            />
            {phoneError && <p className="error">{phoneError}</p>}
          </div>
          <div className="account-field">
            <label>Address:</label>
            <span>{userInfo.address}</span>
          </div>
        </div>

        <div className="account-field">
  <label>Name:</label>
  <input
    type="text"
    value={userInfo.name}
    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
  />
</div>
<div className="account-field">
  <label>Address:</label>
  <textarea
    value={userInfo.address}
    onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
  ></textarea>
</div>
<button onClick={() => alert('User info updated successfully!')}>
  Save Changes
</button>

        {/* Profile Picture Upload */}
        <div className="profile-picture">
          <h3>Profile Picture</h3>
          <input type="file" onChange={handleFileChange} />
          {profilePicture && (
            <div className="profile-picture-preview">
              <img src={profilePicture} alt="Profile" />
            </div>
          )}
        </div>

        <button onClick={() => setProfilePicture(null)}>Remove Profile Picture</button>

        {/* Order Processing Section */}
        <div className="order-processing">
          <h3>Current Order Status</h3>
          <div className="order-status">
            <p>Status: {orderStatus}</p>
            <button className="order-button">Track Order</button>
          </div>
        </div>

        <p>Estimated Delivery: Jan 15, 2025</p>
{orderStatus === "Processing" && (
  <button onClick={() => setOrderStatus("Cancelled")}>Cancel Order</button>
)}

        {/* Courier Tracking Section */}
        <div className="courier-tracking">
          <h3>Courier Tracking</h3>
          <div className="tracking-info">
            <p>Courier: {trackingInfo.courier}</p>
            <p>Tracking Number: {trackingInfo.trackingNumber}</p>
            <p>Status: {trackingInfo.status}</p>
            <button className="tracking-button">View Tracking</button>
          </div>
        </div>

        <button onClick={() => navigator.clipboard.writeText(trackingInfo.trackingNumber)}>
  Copy Tracking Number
</button>

        {/* Saved Items Section */}
        <div className="saved-items">
          <h3>Saved Items</h3>
          <ul>
            {savedItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <ul>

  {savedItems.map((item, index) => (
    <li key={index}>
      <img src={`image/${item.name}.jpg`} alt={item.name} />
      {item.name} - {item.price}
      <button onClick={() => {
        const updatedItems = savedItems.filter((_, i) => i !== index);
        setSavedItems(updatedItems);
      }}>
        Remove
      </button>
    </li>
  ))}
</ul>

        </div>

        {/* Return an Item Section */}
        <div className="return-item">
          <h3>Return an Item</h3>
          <ul>
            {returns.map((item, index) => (
              <li key={index}>
                {item.item} - Status: {item.status}
                <button className="return-button">Return Item</button>
              </li>
            ))}
          </ul>

          <select>
  <option value="Damaged">Damaged</option>
  <option value="Incorrect Item">Incorrect Item</option>
  <option value="Other">Other</option>
</select>
<input type="file" />

        </div>

        {/* Standard Features Section */}
        <div className="standard-features">
          <h3>Standard Features</h3>

          {/* View Order History Section */}
          <div className="feature-item">
            <button
              className="standard-button"
              onClick={() => toggleSection("orderHistory")}
            >
              View Order History
            </button>
            {expandedSection === "orderHistory" && (
              <div className="expanded-section">
                <ul>
                  <li>Order #1234 - Status: Shipped</li>
                  <li>Order #5678 - Status: Delivered</li>
                  <li>Order #9101 - Status: Processing</li>
                </ul>
              </div>
            )}
          </div>

          {/* Change Password Section */}
          <div className="feature-item">
            <h4>Change Password</h4>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={handlePasswordChange}
            />
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {passwordError && <p className="error">{passwordError}</p>}
            <button
              className="standard-button"
              onClick={handleSavePassword}
              disabled={passwordError || newPassword !== confirmPassword}
            >
              Save New Password
            </button>
          </div>

          {/* Update Preferences Section */}
          <div className="feature-item">
            <h4>Update Preferences</h4>
            <label>Notifications</label>
            <input
              type="checkbox"
              checked={preferences.notifications}
              onChange={(e) =>
                setPreferences({ ...preferences, notifications: e.target.checked })
              }
            />
            <br />
            <label>Language</label>
            <select
              value={preferences.language}
              onChange={(e) =>
                setPreferences({ ...preferences, language: e.target.value })
              }
            >
              <option value="English">English</option>
              <option value="Spanish">Tamil</option>
              <option value="French">Kannada</option>
            </select>
            <button
              className="standard-button"
              onClick={handleSavePreferences}
            >
              Save Preferences
            </button>
          </div>

          {/* Other Settings Section */}
          <div className="feature-item">
            <button className="standard-button">Other Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
