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

  const [returns, setReturns] = useState([]);
  const [returnReason, setReturnReason] = useState("");
  const [returnPhoto, setReturnPhoto] = useState(null);
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
  const [watchCollection, setWatchCollection] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([
    { name: "Rolex Submariner", orderNumber: "ORD12345", date: "2024-01-10", price: "$10,000" },
  ]);
  const [insurancePolicies, setInsurancePolicies] = useState([]);

  // Password validation and management functions
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
    setPasswordError(password.length < 6 ? "Password must be at least 6 characters." : "");
  };

  const validatePasswordMatch = (confirmPassword) => {
    setPasswordError(confirmPassword !== newPassword ? "Passwords do not match." : "");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email) ? "Please enter a valid email." : "");
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\+\-\.\(\)\/\s]*$/;
    setPhoneError(!phoneRegex.test(phone) ? "Please enter a valid phone number." : "");
  };

  const handleSavePassword = () => {
    if (!passwordError && newPassword === confirmPassword) {
      alert("Password updated successfully!");
      // Reset fields after saving
      setNewPassword("");
      setConfirmPassword("");
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

  // Returns Management
  const handleAddReturn = () => {
    if (returnReason && returnPhoto) {
      const newReturn = {
        item: returnReason,
        status: "Pending",
        photo: returnPhoto,
      };
      setReturns([...returns, newReturn]);
      setReturnReason("");
      setReturnPhoto(null);
      alert("Return submitted successfully!");
    } else {
      alert("Please provide a return reason and upload a photo.");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReturnPhoto(URL.createObjectURL(file));
    }
  };

  const handleRemoveReturn = (index) => {
    const updatedReturns = returns.filter((_, i) => i !== index);
    setReturns(updatedReturns);
    alert("Return request removed.");
  };

  // Watch Collection Management
  const handleAddWatch = (watch) => {
    setWatchCollection([...watchCollection, watch]);
    alert(`${watch.name} added to your collection!`);
  };

  const handleRemoveWatch = (index) => {
    const updatedCollection = watchCollection.filter((_, i) => i !== index);
    setWatchCollection(updatedCollection);
    alert("Watch removed from collection.");
  };

  // Review Management
  const handleSubmitReview = (review) => {
    setReviews([...reviews, review]);
    alert("Review submitted successfully!");
  };

  // Wishlist Management
  const handleAddToWishlist = (watch) => {
    setWishlist([...wishlist, watch]);
    alert(`${watch.name} added to your wishlist!`);
  };

  return (
    <div className="account-dashboard-page">
      <h1 className="brand-title">My Account</h1>
      <p className="tagline">Manage your orders, saved items, and more</p>

      {/* User Info Section */}
      <div className={`account-info ${expandedSection === "accountInfo" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("accountInfo")}>Account Information</h3>
        {expandedSection === "accountInfo" && (
          <div>
            <div className="account-field">
              <label>Name:</label>
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              />
            </div>
            <div className="account-field">
              <label>Email:</label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                onBlur={() => validateEmail(userInfo.email)}
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>
            <div className="account-field">
              <label>Phone:</label>
              <input
                type="text"
                value={userInfo.phone}
                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                onBlur={() => validatePhone(userInfo.phone)}
              />
              {phoneError && <p className="error">{phoneError}</p>}
            </div>
            <div className="account-field">
              <label>Address:</label>
              <textarea
                value={userInfo.address}
                onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
              ></textarea>
            </div>
            <button onClick={() => alert('User info updated successfully!')}>Save Changes</button>
          </div>
        )}
      </div>

      {/* Profile Picture Upload */}
      <div className={`profile-picture ${expandedSection === "profilePicture" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("profilePicture")}>Profile Picture</h3>
        {expandedSection === "profilePicture" && (
          <div>
            <input type="file" onChange={handleFileChange} />
            {profilePicture && (
              <div className="profile-picture-preview">
                <img src={profilePicture} alt="Profile" />
                <button onClick={() => setProfilePicture(null)}>Remove Profile Picture</button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Order Processing Section */}
      <div className={`order-processing ${expandedSection === "orderProcessing" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("orderProcessing")}>Current Order Status</h3>
        {expandedSection === "orderProcessing" && (
          <div>
            <p>Current Status: {orderStatus}</p>
            {orderStatus === "Processing" && (
              <button onClick={() => {
                setOrderStatus("Cancelled");
                alert("Order cancelled successfully!");
              }}>Cancel Order</button>
            )}
          </div>
        )}
      </div>

      {/* Courier Tracking Section */}
      <div className={`courier-tracking ${expandedSection === "courierTracking" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("courierTracking")}>Courier Tracking</h3>
        {expandedSection === "courierTracking" && (
          <div>
            <p>Courier: {trackingInfo.courier}</p>
            <p>Tracking Number: {trackingInfo.trackingNumber}</p>
            <p>Status: {trackingInfo.status}</p>
            <button onClick={() => {
              navigator.clipboard.writeText(trackingInfo.trackingNumber);
              alert('Tracking number copied to clipboard!');
            }}>
              Copy Tracking Number
            </button>
            <button className="tracking-button" onClick={() => window.open(`https://www.fedex.com/fedextrack/?tracknumbers=${trackingInfo.trackingNumber}`, '_blank')}>
              View Tracking
            </button>
          </div>
        )}
      </div>

      {/* Saved Items Section */}
      <div className={`saved-items ${expandedSection === "savedItems" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("savedItems")}>Saved Items</h3>
        {expandedSection === "savedItems" && (
          <div>
            <ul>
              {savedItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                  <button onClick={() => setSavedItems(savedItems.filter((_, i) => i !== index))}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Returns Section */}
      <div className={`returns ${expandedSection === "returns" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("returns")}>Returns</h3>
        {expandedSection === "returns" && (
          <div>
            <h4>Submit a Return</h4>
            <div className="account-field">
              <label>Return Reason:</label>
              <input
                type="text"
                value={returnReason}
                onChange={(e) => setReturnReason(e.target.value)}
              />
            </div>
            <div className="account-field">
              <label>Upload Photo:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
              {returnPhoto && (
                <div className="photo-preview">
                  <img src={returnPhoto} alt="Return Preview" />
                </div>
              )}
            </div>
            <button onClick={handleAddReturn}>Submit Return</button>
            <h4>Submitted Returns</h4>
            <ul>
              {returns.map((returnItem, index) => (
                <li key={index}>
                  {returnItem.item} - {returnItem.status}
                  <button onClick={() => handleRemoveReturn(index)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Change Password Section */}
      <div className={`change-password ${expandedSection === "changePassword" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("changePassword")}>Change Password</h3>
        {expandedSection === "changePassword" && (
          <div>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={handlePasswordChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {passwordError && <p className="error">{passwordError}</p>}
            <button onClick={handleSavePassword}>Save Password</button>
          </div>
        )}
      </div>

      {/* Preferences Section */}
      <div className={`preferences ${expandedSection === "preferences" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("preferences")}>Preferences</h3>
        {expandedSection === "preferences" && (
          <div>
            <label>Receive Notifications ?
              <input
                type="checkbox"
                checked={preferences.notifications}
                onChange={() => setPreferences({ ...preferences, notifications: !preferences.notifications })}
              />
            </label>
            <select
              value={preferences.language}
              onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Kannada">Kannada</option>
              <option value="Tamil">Tamil</option>
              <option value="French">French</option>
              <option value="Hindi">Hindi</option>
            </select>
            <button onClick={handleSavePreferences}>Save Preferences</button>
          </div>
        )}
      </div>

      {/* Watch Collection Section */}
      <div className={`watch-collection ${expandedSection === "watchCollection" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("watchCollection")}>My Watch Collection</h3>
        {expandedSection === "watchCollection" && (
          <div>
            <ul>
              {watchCollection.map((watch, index) => (
                <li key={index}>
                  {watch.name} 
                  <button onClick={() => handleRemoveWatch(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <button onClick={() => handleAddWatch({ name: "New Watch", purchaseDate: new Date().toLocaleDateString() })}>
              Add Watch
            </button>
          </div>
        )}
      </div>

      {/* Reviews Section */}
      <div className={`watch-reviews ${expandedSection === "watchReviews" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("watchReviews")}>Watch Reviews</h3>
        {expandedSection === "watchReviews" && (
          <div>
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>{review.text} - Rating: {review.rating}</li>
              ))}
            </ul>
            <button onClick={() => handleSubmitReview({ text: "Great watch!", rating: 5 })}>Submit Review</button>
          </div>
        )}
      </div>

      {/* Wishlist Section */}
      <div className={`wishlist ${expandedSection === "wishlist" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("wishlist")}>Wishlist</h3>
        {expandedSection === "wishlist" && (
          <div>
            <ul>
              {wishlist.map((watch, index) => (
                <li key={index}>{watch.name}</li>
              ))}
            </ul>
            <button onClick={() => handleAddToWishlist({ name: "New Watch" })}>Add to Wishlist</button>
          </div>
        )}
      </div>

      {/* Purchase History Section */}
      <div className={`purchase-history ${expandedSection === "purchaseHistory" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("purchaseHistory")}>Purchase History</h3>
        {expandedSection === "purchaseHistory" && (
          <table>
            <thead>
              <tr>
                <th>Watch</th>
                <th>Order Number</th>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.orderNumber}</td>
                  <td>{item.date}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Insurance Information Section */}
      <div className={`insurance-info ${expandedSection === "insuranceInfo" ? "expanded" : "collapsed"}`}>
        <h3 onClick={() => toggleSection("insuranceInfo")}>Delete Account ?</h3>
        {expandedSection === "insuranceInfo" && (
          <div>
            <ul>
              {insurancePolicies.map((policy, index) => (
                <li key={index}>{policy.details}</li>
              ))}
            </ul>
            <button onClick={() => setInsurancePolicies([...insurancePolicies, { details: "Accounts Deleted" }])}>Delete Account</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
