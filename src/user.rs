/// Normal user
pub struct User {
    /// Username displayed in UI
    pub display_name: String,
    /// Randomly generated ID to distinguish users
    pub id: String,
    /// User's status
    pub status: UserStatus,
}

/// Status of a user
pub enum UserStatus {
    /// User is active
    Active,
    /// User is suspended by an admin
    Suspended,
}
