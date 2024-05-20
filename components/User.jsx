import axios from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function User() {
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState({ email: "", password: "", role: "" });

  const userList = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7257/Admin/UserList",
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.post(
        `https://localhost:7257/Admin/UserSil?id=${userId}`,
        null,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "Application / json",
          },
        }
      );
      userList();
    } catch (err) {
      console.error(err);
    }
  };

  const addUser = async () => {
    try {
      await axios.post("/api/users", newUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setNewUser({ email: "", password: "", role: "" });
      userList();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    userList();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-extrabold mb-6 text-center">
        Kullanıcı Listesi
      </h2>
      <TableContainer component={Paper} className="shadow-lg mb-6">
        <Table>
          <TableHead className="bg-gray-200">
            <TableRow>
              <TableCell className="text-xl font-semibold">Email</TableCell>
              <TableCell className="text-xl font-semibold">Şifre</TableCell>
              <TableCell className="text-xl font-semibold">Rol</TableCell>
              <TableCell className="text-xl font-semibold">İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-100">
                <TableCell className="text-lg">{user?.email}</TableCell>
                <TableCell className="text-lg">{user?.sifre}</TableCell>
                <TableCell className="text-lg">
                  {user.rol === "u" ? "normal kullanıcı" : "yetkili"}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteUser(user.id)}
                    startIcon={<DeleteIcon />}
                    className="font-bold"
                  >
                    Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
