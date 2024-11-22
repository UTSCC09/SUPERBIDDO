import React from "react";
import { Box, Typography } from "@mui/material";
import { AuctionStatusEnum, AuctionStatusColorEnum, BiddingStatusColorEnum, BiddingStatusEnum } from "@/types/auctionTypes";

interface StatusLabelProps {
  status: AuctionStatusEnum | BiddingStatusEnum;
}

const StatusLabel: React.FC<StatusLabelProps> = ({ status }) => {
  console.log(status.toString());
  const statusColor = 
    status in AuctionStatusEnum 
      ? AuctionStatusColorEnum[status === "Not scheduled" ? "NotScheduled" : status as keyof typeof AuctionStatusColorEnum]
      : BiddingStatusColorEnum[status as BiddingStatusEnum];

  return (
    <Box display="flex" alignItems="center" padding="5px 10px" borderRadius="20px" bgcolor="#f0f0f0">
      <Box
        width="15px"
        height="15px"
        borderRadius="50%"
        bgcolor={statusColor}
        marginRight="5px"
      />
    <Typography variant="body2">{status}</Typography>
    </Box>
  );
};

export default StatusLabel;