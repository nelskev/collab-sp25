import React from "react";
import { useEffect } from "react";

export default function LocationPage() {
    useEffect ( () => {
        document.title = "Location";
    }
    , []);

    return (
        <h1>Welcome to Location Page</h1>
    );
}