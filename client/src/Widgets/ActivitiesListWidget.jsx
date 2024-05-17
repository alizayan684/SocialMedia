import { Box, Typography, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { setActivies } from "../state"
import { useDispatch, useSelector } from "react-redux"
import Activity from "./Activity"
import WidgetWrapper from "../layouts/WidgetWrapper"

const ActivitiesListWidget = ({userId}) => {

    const dispatch = useDispatch()
    const { palette } = useTheme()
    const token = useSelector((state) => state.token);
    // const [activities,setActivities]=useState([])
    const main = palette.primary.main;
    const light = palette.primary.light;
    const Default = palette.background.default;
    //   const activities = useSelector((state) => state.user.activities);

    // const getActivities = async () => {
    //     const response = await fetch(
    //         `http://localhost:3001/api/activities/${userId}`,
    //         {
    //             method: "GET",
    //             headers: { Authorization: `Bearer ${token}` },
    //         }
    //     );
    //     const data = await response.json();
    //     setActivies(data)
    // };
    // useEffect(() => {
    //     getActivities()
    //     console.log(activities);
    // }, []);

    // for test
    let specificDate = new Date('2024-05-06');
     const activities = [
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 1,
            userId: 2,
            date: specificDate.toISOString().slice(0, 10),
            discription: "some one do something in somewhere"
        },
        {
            id: 2,
            userId: 3,
            date: specificDate.toISOString().slice(0, 10),
            discription: "another some one do something in somewhere"
        }
     ]

    return (
        <WidgetWrapper>
            <Typography
                color={palette.neutral.dark}
                variant="h3"
                fontWeight="500"
                sx={{ mb: "1.5rem" }}
            >
                Activity List
            </Typography>
            <Box
                display="flex"
                flexDirection="column"
                gap="0.7rem"
                sx={{
                    overflowY: 'auto',
                    maxHeight: '700px',
                    '&::-webkit-scrollbar': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: Default,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: light,
                        borderRadius: '5px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: main,
                    }
                }}
                className='scroll-content'
            >
                {activities.map((activity) => (
                    <Activity
                        key={activity.id}
                        activityId={activity.id}
                        userId={activity.uid}
                        discription={activity.discription}
                        date={activity.date}
                    />
                ))}
            </Box>
        </WidgetWrapper>
    )
}

export default ActivitiesListWidget