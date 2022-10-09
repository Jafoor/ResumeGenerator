import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "12345678",
  // password: process.env.DB_KEY,
  database:"blog"
})

{ userResumeData.skill.map((data, index) => (
  <li key={data.id}>
    <h6 className="font-weight-bold text-dark">
                      {data.skilltype}:
                    </h6>
                    <p className="px-2">{data.skillsets}</p>
</li>


))}