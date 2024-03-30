<>
    <Box
        sx={{
            width: "100%",
            position: "relative",
            alignItems: "center",
            //height: `calc(100vh - ${navbarHeight}px)`,
            height: "89vh",
            display: "flex",
            bgcolor: "red",
            flexDirection: "column",
        }}
    >
        <NewDownloadImage
            optionChosen={optionChosen}
            navbarHeight={navbarHeight}
        />
    </Box>

    <React.Suspense fallback={<div>Loading...</div>}>
        <Box
            sx={{
                height: "50vh",
                width: "100%",
                bgcolor: "#20201f",
                position: "relative",
            }}
        >
            <Options
                OptionsToChoose={OptionsToChoose}
                optionChosen={optionChosen}
            />
        </Box>
    </React.Suspense>

    <React.Suspense fallback={<div>Loading...</div>}>
        <Box
            sx={{
                height: "100vh",
                backgroundImage: "url('/LifeWallpaper.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                //position: "relative",
            }}
        >
            <Life />
        </Box>
    </React.Suspense>

    <React.Suspense fallback={<div>Loading...</div>}>
        <Box
            sx={{
                height: "100vh",
                bgcolor: "#20201F",

                display: "flex",
                flexDirection: "column",
                position: "relative",
            }}
        >
            <People />
        </Box>
    </React.Suspense>

    <React.Suspense fallback={<div>Loading...</div>}>
        <Box
            sx={{
                //minHeight: "100vh",
                padding: "3rem 6rem",
                background: "#202020",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                position: "relative",
            }}
        >
            <HowToUse />
        </Box>
    </React.Suspense>

    <Box
        sx={{
            height: "100vh",
            //padding: "3rem 6rem",
            width: "100vw",
            //background: "url('/BusinessWallpaper.svg')",
            //backgroundImage: "url('/BusinessWallpaper.svg')",
            //backgroundRepeat: "no-repeat",
            //backgroundSize: "100%",
            //backgroundPosition: "bottom",
            display: "flex",
            //opacity: 0.5,
            flexDirection: "column",
            position: "relative",
            //padding: "2rem 4rem 2rem 4rem",
        }}
    >
        <Image
            src="/BusinessWallpaper.svg"
            alt="BusinessWallpaper"
            fill
            style={{
                objectFit: "cover",
                objectPosition: "bottom",
                zIndex: -1,
            }}
        />
        <BusinessComp />

        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 4rem",
                background:
                    "linear-gradient(93.25deg, #FFE6FB 34.35%, #D385D6 150.82%)",
                //position: "relative",
                height: "10%",
            }}
        >
            <Typography
                sx={{
                    fontFamily: "unset",
                    fontSize: "1.5rem",
                }}
            >
                ¿Quieres que tu marca esté en <b>Stable® </b>?
            </Typography>
            <Button
                sx={{
                    textTransform: "none",
                    borderRadius: "0",
                    fontFamily: "unset",
                    fontSize: "1.2rem",
                    color: "black",
                    bgcolor: "rgba(211, 133, 214, 1)",
                    //fontWeight: "bold",
                    "&:hover": {
                        cursor: "pointer",
                        bgcolor: "rgba(211, 133, 214, 0.8)",
                    },
                }}
            >
                Haz click aqui
            </Button>
        </Box>
    </Box>

    <Footer optionChosen={-1} />
</>