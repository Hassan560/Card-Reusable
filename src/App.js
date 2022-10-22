// import styled from "@emotion/styled";
import { Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// components
import UserCard from "./Components/UserCard";
import Header from "./Components/Header";

function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "#E3F2FD",
        height: "100%",
        p: "20px",
        mt: "20px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          height: "100%",
          p: "20px",
          borderRadius: "10px",
        }}
      >
        <Header />
        <hr style={{ marginTop: "25px", opacity: 0.4, color: "gray" }} />
        <UserCard />
      </Box>
    </Container>
  );
}

export default App;
