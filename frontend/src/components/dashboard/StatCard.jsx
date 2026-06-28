import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <Card
      component={motion.div}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      sx={{
        borderRadius: 5,
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              color="text.secondary"
              fontSize={15}
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              mt={1}
            >
              <CountUp
                end={value}
                duration={2}
              />
            </Typography>
          </Box>

          <Avatar
            sx={{
              bgcolor: color,
              width: 60,
              height: 60,
            }}
          >
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );
}