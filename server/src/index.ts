import {pool} from "./config/database";

async function testDB() {
  try {
    const res = await pool.query("SELECT NOW()")
    console.log("DB 연결 성공:", res.rows);
  }catch (error){
    console.error("DB 연결 실패:", error);
  }
}

testDB();