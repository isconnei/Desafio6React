import React from "react";

export default function Profile() {
  const email = "icontrerasn@pm.me";

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body text-center">
          <h5 className="card-title mb-3">Perfil</h5>
          <p className="card-text">
            <strong>Email:</strong> {email}
          </p>
          <button className="btn btn-danger mt-3">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
}
