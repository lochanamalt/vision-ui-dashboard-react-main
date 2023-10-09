

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiBadge from "components/VuiBadge";


function InterestsCard({ title, interests}) {

// const colors = ["primary",
//                 "secondary",
//                 "info",
//                 "success",
//                 // "warning",
//                 "error",
//                 "light",
//                 "dark",];
  const renderInterest = (interests) ? interests.map((interest, key) => (
    <VuiBadge
        key={interest}
        pr={1}
        pl={0.5}
        pb={2}
     
          variant="contained"
          badgeContent={interest}
          color="dark"
          size="lg"
          container
          sx={{
            justifyContent: "center"
          }}
        />

  )) : [];

  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
       { title && title.length > 0 &&
        <VuiBox display="flex" mb="14px" justifyContent="space-between" alignItems="center">
            <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
              {title}
            </VuiTypography>
        </VuiBox>
      }
      <VuiBox>

        { renderInterest && renderInterest.length > 0 &&
          <VuiBox opacity={0.3}>
            <Divider />
          </VuiBox>
        }

        { renderInterest && renderInterest.length > 0 &&
            <VuiBox>
              <VuiBox display="grid"  sx={{gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))"}} py={1} pr={2} color="white">
                {renderInterest}
              </VuiBox>
            </VuiBox>
        }

      </VuiBox>
    </Card>
  );
}

// Typechecking props for the InterestsCard
InterestsCard.propTypes = {
  title: PropTypes.string.isRequired,
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InterestsCard;
