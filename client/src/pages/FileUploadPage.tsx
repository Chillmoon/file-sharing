import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Breadcrumbs,
  Link,
} from "@mui/material";
import FileList from "../components/FileList";
import FileUpload from "../components/FileUpload";
import FolderList from "../components/FolderList";
import FolderStructure from "../components/FolderStructure";

const FileUploadPage: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
        <Link underline="hover" color="inherit" href="#">
          Folder 1
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Folder 2
        </Link>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        File Storage Service
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <FolderList />
        </Grid>
        <Grid item xs={12} md={9}>
          <Box sx={{ display: "flex", marginBottom: 2 }}>
            <TextField
              label="Search files"
              variant="outlined"
              size="small"
              sx={{ marginRight: 2, flexGrow: 1 }}
            />
            <Button variant="contained">Search</Button>
          </Box>
          <FolderStructure />
          <FileList />
          <FileUpload />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FileUploadPage;
