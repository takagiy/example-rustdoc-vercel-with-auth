//! Example module to demonstrate documentation.
//!
//! This module contains items related to Pokemon.

/// `Pokemon`s are mysterious creatures that you can catch and train to battle other Pokemon.
pub struct Pokemon {
    /// Species of the Pokemon.
    pub species: Species,
    /// Level of the Pokemon.
    ///
    /// Pokemon's level determines its stats and the moves it can learn.
    /// Pokemon's level can be increased by gaining experience points by winning battles.
    pub level: u8,
    /// Moves that the Pokemon knows.
    ///
    /// Pokemon can remember up to 4 moves at a time.
    pub moves: Vec<Move>,
    /// Current health points of the Pokemon.
    pub hp: u16,
    /// Type of the Pokemon.
    ///
    /// Pokemon's type affects the damage it deals and receives in battle.
    /// One Pokemon can have one or two types.
    pub type_: Vec<Type>,
}

/// Species of a [`Pokemon`].
#[non_exhaustive]
pub enum Species {
    Bulbasaur,
    Charmander,
    Squirtle,
}

/// [`Pokemon`]'s move.
pub struct Move {
    pub name: String,
    pub type_: Type,
    pub power: u16,
}

/// [`Pokemon`]'s type.
///
/// Each type may have some weaknesses and resistances against other types.
#[non_exhaustive]
pub enum Type {
    Normal,
    Fire,
    Water,
    Grass,
}

impl Type {
    /// Checks if `self` is weak against the given type.
    ///
    /// ```
    /// use pokemon::Type;
    ///
    /// assert!(Type::Fire.is_weak_to(&Type::Water));
    /// assert!(Type::Fire.is_weak_to(&Type::Grass));
    /// assert!(Type::Water.is_weak_to(&Type::Grass));
    /// ```
    pub fn is_weak_to(&self, other: &Type) -> bool {
        match (self, other) {
            (Type::Fire, Type::Water) => true,
            (Type::Fire, Type::Grass) => true,
            (Type::Water, Type::Grass) => true,
            _ => false,
        }
    }

    /// Checks if `self` is resistant to the given type.
    ///
    /// ```
    /// use pokemon::Type;
    ///
    /// assert!(Type::Water.is_resistant_to(&Type::Fire));
    /// assert!(Type::Grass.is_resistant_to(&Type::Fire));
    /// assert!(Type::Grass.is_resistant_to(&Type::Water));
    /// ```
    pub fn is_resistant_to(&self, other: &Type) -> bool {
        match (self, other) {
            (Type::Water, Type::Fire) => true,
            (Type::Grass, Type::Fire) => true,
            (Type::Grass, Type::Water) => true,
            _ => false,
        }
    }
}
