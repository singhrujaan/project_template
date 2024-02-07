import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";
const router = express.Router();

router.post("/employeeLogin", (req, res) => {
  const sql = "SELECT * from employee Where email = ?";
  con.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: err });
    if (result.length > 0) {
      bcrypt.compare(req.body.password, result[0].password, (err, response) => {
        if (err)
          return res.json({ loginStatus: false, Error: "incorrect passoword" });
        if (response) {
          const email = result[0];
          const token = jwt.sign(
            { role: "admin", email: email, id: result[0].id },
            "jwt_secret_key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json({ loginStatus: true, id: result[0].id });
        }
      });
    } else {
      return res.json({ loginStatus: false, Error: "wrong email or password" });
    }
  });
});

router.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select * from employee where id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: err });
    if (result.length > 0) {
      console.log(result);
      return res.json({ Status: true, employee: result });
    } else {
      return res.json({ Status: false, employee: "not found" });
    }
  });
});

router.put("/edit_employee/:id", (req, res) => {
    const id = req.params.id;
    const sql =
      "update employee set name=?, email=?,salary=?, address=?,category_id=? where id=?";
    const updatedValues = [
      req.body.name,
      req.body.email,
      req.body.salary,
      req.body.address,
      req.body.category_id,
    ];
    con.query(sql, [...updatedValues, id], (err, result) => {
      if (err) return res.json({ Status: false, Error: err });
      console.log(result);
      return res.json({ Status: true });
    });
  });

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ Status: true });
});

export { router as employeeRouter };
