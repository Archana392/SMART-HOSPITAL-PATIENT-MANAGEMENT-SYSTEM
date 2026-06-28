import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip,
} from "@mui/material";

import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon,
  color,
  increase = "+12%",
}) {
  return (
    <Card
      component={motion.div}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: .3 }}
      sx={{
        borderRadius: 5,
        overflow: "hidden",
        background:
          "linear-gradient(145deg,#ffffff,#F8FBFF)",
        boxShadow: "0 15px 40px rgba(0,0,0,.08)",
        cursor: "pointer",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Avatar
            sx={{
              bgcolor: color,
              width: 65,
              height: 65,
            }}
          >
            {icon}
          </Avatar>

          <Chip
            label={increase}
            color="success"
            size="small"
          />
        </Box>

        <Typography
          mt={3}
          color="text.secondary"
        >
          {title}
        </Typography>

        <Typography
          variant="h3"
          fontWeight={700}
          mt={1}
        >
          {value}
        </Typography>

        <Typography
          mt={1}
          color="success.main"
          fontSize={14}
        >
          ▲ Increased from last month
        </Typography>
      </CardContent>
    </Card>
  );
}