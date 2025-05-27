<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nombre = htmlspecialchars($_POST["nombre"]);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $mensaje = htmlspecialchars($_POST["mensaje"]);

  $to = "Bdfconstrucciones@gmail.cl";
  $subject = "Nuevo mensaje desde el formulario de contacto";
  $body = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Mensaje enviado con éxito.";
  } else {
    echo "Error al enviar el mensaje.";
  }
} else {
  echo "Acceso no permitido.";
}
?>
