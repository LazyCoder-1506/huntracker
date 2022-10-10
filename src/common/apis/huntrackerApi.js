import axios from "axios";

const BASE_ID = process.env.REACT_APP_BASE_ID;
const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

export default axios.create({
  baseURL: `https://api.airtable.com/v0/${BASE_ID}/`,
  headers: { 
    'Authorization': `Bearer ${BEARER_TOKEN}`
  }
})