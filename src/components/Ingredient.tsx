import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

interface IngredientProps {
  name: string;
  description?: string[];
  summary: string;
}

export function IngredientItem({
  name,
  description,
  summary,
}: IngredientProps) {
  return (
    <div>
      <div>{name}</div>
      <div>
        {description?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </div>
      <div>{summary}</div>
    </div>
  );
}

export function IngredientPopover({ name, summary }: IngredientProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <span>
      <span
        style={{ display: "inline-block" }}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className="popover-link">
        {name}
      </span>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus>
        <Typography sx={{ p: 1 }}>{summary}</Typography>
      </Popover>
    </span>
  );
}
