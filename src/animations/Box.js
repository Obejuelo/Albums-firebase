import pose from 'react-pose';

const Box = pose.div({
    open: {
        opacity: 1,
        height: 'auto',
        delay: ({position}) => position * 50
    },
    closed: {
        opacity: 0,
        height: 0
    }
})

export default Box;