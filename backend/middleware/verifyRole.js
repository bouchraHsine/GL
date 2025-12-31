// backend/middleware/verifyRole.js
const verifyRole = (allowedRoles = []) => {
  const allowed = allowedRoles.map((r) => String(r).toLowerCase());

  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(401).json({ message: "Utilisateur non authentifié" });
    }

    const role = String(req.user.role).toLowerCase();

    if (!allowed.includes(role)) {
      return res.status(403).json({ message: "Accès interdit : rôle non autorisé" });
    }

    next();
  };
};

module.exports = verifyRole;
