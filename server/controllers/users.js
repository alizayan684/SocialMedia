import express from "express"
import { dataBase } from "../utilities/connection_data.js";


//Edit user
export const editUser = async (req, res) => {
    const { id } = req.params;
    const {fname,lname,address,email,password,fb,linkedin} = req.body;
    try {
      const user = await dataBase.query('UPDATE users SET fname = $1, lname = $2, address=$3, email=$4, password=$5, fb=$6, linkedin=$7 WHERE id = $8', 
      [fname,lname,address,email,password,fb,linkedin,id]);
      res.json(user.rows[0]);
      console.log("User has been updated successfully")
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }


  //Get user by ID
export const getUserByID = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await dataBase.query('SELECT * FROM users WHERE id = $1', [id]);
      console.log(user.rows[0]);
      res.json(user.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }




