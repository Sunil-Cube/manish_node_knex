// var express = require('express');
// var router = express.Router();
// var mobileController = require('../controller/mobile');
// //var mobileController = rootRequire('v1/controller/mobile');

// var verifyToken = require('../../middleware/verifyToken.js');


import express from "express";
import mobileController from "../controller/mobile";
/* eslint linebreak-style: ["error", "windows"] */

import verifyToken from "../../middleware/verifyToken.js";

//const verifyToken = require('../../middleware/verifyToken.js');
const router = express.Router();


/* route information */
router.post('/login',verifyToken,mobileController.login); 
router.get('/get_login',mobileController.get_login); 
// router.post('/add_user',verifyToken,mobileController.add_user);
// router.post('/edit_user',verifyToken,mobileController.edit_user);
// router.get('/delete_user/:id',verifyToken,mobileController.delete_user);
// router.post('/list_user_search',mobileController.list_user_search);

// router.get('/list_user_pagination',verifyToken,mobileController.list_user_pagination);
// router.post('/list_user_search_example',mobileController.list_user_search_example);

// router.post('/emp_add',mobileController.emp_add); 
// router.get('/emp_list',mobileController.emp_list); 
// router.post('/emp_update/:id',mobileController.emp_update); 
// router.get('/emp_delete/:id',mobileController.emp_delete); 


export default router;
//module.exports = router;

