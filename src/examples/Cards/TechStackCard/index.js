

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";

function TechStackCard({ title, techStack}) {
  const { size } = typography;

  const renderTechStack = (techStack) ? techStack.map(({ icon, technology }) => (
    <VuiBox
      key={technology}
      rel="noreferrer"
      fontSize={size.lg}
      color="white"
      pr={1}
      pl={0.5}
      pb={2}
   
    >
      <Tooltip title={technology}>
        <img width="45"  alt="plaform-icon" src={icon}/>
      </Tooltip>
      
    </VuiBox>

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

        { renderTechStack && renderTechStack.length > 0 &&
          <VuiBox opacity={0.3}>
            <Divider />
          </VuiBox>
        }

        { renderTechStack && renderTechStack.length > 0 &&
            <VuiBox>
              <VuiBox display="grid"  sx={{"grid-template-columns": "repeat(auto-fit, minmax(80px, 1fr))"}} py={1} pr={2} color="white">
                {renderTechStack}
              </VuiBox>
            </VuiBox>
        }

      </VuiBox>
    </Card>
  );
}

// Typechecking props for the TechStackCard
TechStackCard.propTypes = {
  title: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TechStackCard;
