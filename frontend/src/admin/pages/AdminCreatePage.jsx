import React from "react";
import { authenticatedFetch } from '../authentication/authenticatedFetch'

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AdminNavbar from "../components/AdminNavbar";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function AdminCreatePage() {
  const { id } = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `ADMIN CREATE : Scotts Collision Repair`;
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <h2>Create a New Admin</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await fetch("http://localhost:8000/admins", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content }),
              });
              if (!response.ok) {
                throw new Error("Failed to create admin");
              }
              navigate("/admin");
            } catch (error) {
              setError(error.message);
            }
          }}>    </form>
      </div>
    </>
  );
}