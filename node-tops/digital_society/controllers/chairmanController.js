const express = require("express");
const userDB = require("../src/models/usermodel");
const chairmanDB = require("../src/models/chairmanmodel");
const noticeDB = require("../src/models/noticeModel");

exports.displayHome = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  res.render("login");
};

exports.chairmanRegisterPage = (req, res) => {
  res.render("register");
};

exports.registerChairman = async (req, res) => {
  try {
    console.log(" ==> req.body", req.body);
    const userData = new userDB({
      email: req.body.email,
      password: req.body.password,
      role: "chairman",
    });
    await userData.save();

    if (userData) {
      const chairman = new chairmanDB({
        userid: userData,
        name: req.body.name,
        contact: req.body.contact,
        houseno: req.body.houseno,
      });

      await chairman.save();
      console.log("successfully created");
      res.render("login", { smsg: "Successfully data created" });
    } else {
      res.status(400).json({ error: "Something wrong happend " });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.loginevaluate = async (req, res) => {
  console.log("----->>> req", req.body.email);
  const uid = await userDB.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log("----------->>> uid", uid);
  const cid = await chairmanDB.findOne({ userid: uid });
  console.log("---->>> cid", cid);
  if (cid) {
    res.render("index", { uid: uid, cid: cid });
  } else {
    res.render("login", { emsg: "invaild email or password" });
  }

  // data = {
  //   email: uid.email,
  //   firstname: cid.name,
  //   contactno: cid.contactno,
  // };
  // res.status("200").json({ data: data });
};

exports.addNoticePage = async (req, res) => {
  res.render("addNotice");
};

exports.addNotice = async (req, res) => {
  console.log(req.body);

  const noticeId = await noticeDB({
    title: req.body.title,
    description: req.body.description,
  }).save();
  res.status(200).json({ noticeId });
  // res.render("addNotice");
  // if (noticeId) {
  // } else {
  // }
};


