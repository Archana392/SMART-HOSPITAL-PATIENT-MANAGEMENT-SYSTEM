<Grid container spacing={3} sx={{ mt: 1 }}>
  <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
    <StatCard
      title="Workers"
      value={125}
      icon={<PeopleIcon />}
      color="#1565C0"
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
    <StatCard
      title="Doctors"
      value={18}
      icon={<MedicalServicesIcon />}
      color="#2E7D32"
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
    <StatCard
      title="Medical Records"
      value={560}
      icon={<FolderSharedIcon />}
      color="#FB8C00"
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
    <StatCard
      title="Hospitals"
      value={12}
      icon={<LocalHospitalIcon />}
      color="#8E24AA"
    />
  </Grid>
</Grid>