import fs from "fs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
l
const USERS_FILE = path.join("./data", "users.json");

// helpers
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) return [];
  const data = fs.readFileSync(USERS_FILE, "utf8");
  return data ? JSON.parse(data) : [];
};

const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Signup
export const signup = async (req, res) => {
  const { email, password, role } = req.body;
  let users = readUsers();

  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ error: "User already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);
  users.push({ email, password: hashed, role });
  writeUsers(users);

  res.json({ message: "User registered successfully" });
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  let users = readUsers();

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token, role: user.role, email: user.email });
};
