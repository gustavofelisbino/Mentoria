import {
  Button,
  Typography,
  Stack,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { theme } from "../../themes";
import Dialogs from "./Dialogs";

export default function Hooks() {
  return (
<Stack spacing={3} sx={{ maxWidth: 1000, mx: "auto", p: 2, mt: 2, display: "flex" }}>
 <Typography 
    variant="h5" fontWeight={400} fontSize={32}
    sx={{ 
        textAlign: "center",
        color: "#e0dee3"
    }}>
    Uso de Hooks
 </Typography>
 <Typography variant="body1" color="#e0dee3"
    sx={{
        textAlign: "center",
    }}>
    Explicação sobre cada tipo de hook.
 </Typography>

 <Box
  sx={{
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
    gap: 2,
    maxWidth: 1000,
    mx: "auto",
    p: 2,
    mt: 2,
  }}
>
  <Card
    sx={{
      backgroundColor: "transparent",
      border: "1px solid #e4e3e6",
      borderRadius: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h6" fontWeight={500} fontSize={24} sx={{ color: "#e4e3e6", fontWeight: "bold" }}>
        useState
      </Typography>
      <Typography variant="body1" color="#e4e3e6" sx={{ mt: 2, mb: 2 }}>
        O useState é um hook que permite adicionar estado a componentes funcionais.
      </Typography>
      <Dialogs />
      <Button variant="contained" color="primary" sx={{ mt: "auto", backgroundColor: theme.palette.primary.main }}>
        Ver exemplo
      </Button>
    </CardContent>
  </Card>
  <Card
    sx={{
      backgroundColor: "transparent",
      border: "1px solid #e4e3e6",
      borderRadius: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h6" fontWeight={500} fontSize={24} sx={{ color: "#e4e3e6", fontWeight: "bold" }}>
        useEffect
      </Typography>
      <Typography variant="body1" color="#e4e3e6" sx={{ mt: 2, mb: 2 }}>
        O useEffect é um hook que permite adicionar efeitos colaterais a componentes funcionais.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: "auto", backgroundColor: theme.palette.primary.main }}>
        Ver exemplo
      </Button>
    </CardContent>
  </Card>
  <Card
    sx={{
      backgroundColor: "transparent",
      border: "1px solid #e4e3e6",
      borderRadius: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h6" fontWeight={500} fontSize={24} sx={{ color: "#e4e3e6", fontWeight: "bold" }}>
        useContext
      </Typography>
      <Typography variant="body1" color="#e4e3e6" sx={{ mt: 2, mb: 2 }}>
        O useContext é um hook que permite compartilhar valores entre componentes funcionais.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: "auto", backgroundColor: theme.palette.primary.main }}>
        Ver exemplo
      </Button>
    </CardContent>
  </Card>
  <Card
    sx={{
      backgroundColor: "transparent",
      border: "1px solid #e4e3e6",
      borderRadius: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h6" fontWeight={500} fontSize={24} sx={{ color: "#e4e3e6", fontWeight: "bold" }}>
        useContext
      </Typography>
      <Typography variant="body1" color="#e4e3e6" sx={{ mt: 2, mb: 2 }}>
        O useContext é um hook que permite compartilhar valores entre componentes funcionais.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: "auto", backgroundColor: theme.palette.primary.main }}>
        Ver exemplo
      </Button>
    </CardContent>
  </Card>
  <Card
    sx={{
      backgroundColor: "transparent",
      border: "1px solid #e4e3e6",
      borderRadius: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h6" fontWeight={500} fontSize={24} sx={{ color: "#e4e3e6", fontWeight: "bold" }}>
        useContext
      </Typography>
      <Typography variant="body1" color="#e4e3e6" sx={{ mt: 2, mb: 2 }}>
        O useContext é um hook que permite compartilhar valores entre componentes funcionais.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: "auto", backgroundColor: theme.palette.primary.main }}>
        Ver exemplo
      </Button>
    </CardContent>
  </Card>
  <Card
    sx={{
      backgroundColor: "transparent",
      border: "1px solid #e4e3e6",
      borderRadius: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h6" fontWeight={500} fontSize={24} sx={{ color: "#e4e3e6", fontWeight: "bold" }}>
        useContext
      </Typography>
      <Typography variant="body1" color="#e4e3e6" sx={{ mt: 2, mb: 2 }}>
        O useContext é um hook que permite compartilhar valores entre componentes funcionais.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: "auto", backgroundColor: theme.palette.primary.main }}>
        Ver exemplo
      </Button>
    </CardContent>
  </Card>
  <Card
    sx={{
      backgroundColor: "transparent",
      border: "1px solid #e4e3e6",
      borderRadius: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h6" fontWeight={500} fontSize={24} sx={{ color: "#e4e3e6", fontWeight: "bold" }}>
        useContext
      </Typography>
      <Typography variant="body1" color="#e4e3e6" sx={{ mt: 2, mb: 2 }}>
        O useContext é um hook que permite compartilhar valores entre componentes funcionais.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: "auto", backgroundColor: theme.palette.primary.main }}>
        Ver exemplo
      </Button>
    </CardContent>
  </Card>
</Box>
</Stack>)
}