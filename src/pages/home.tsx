import * as React from 'react'
import { Grid, Input, Button, NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    return(
    <div className='home'>
      <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className='grid-demo-item-block'>A</div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className='grid-demo-item-block'>B</div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className='grid-demo-item-block'>C</div>
          </Grid.Item>
          <Grid.Item>
            <div className='grid-demo-item-block'>D</div>
          </Grid.Item>
          <Grid.Item span={3}>
            <div className='grid-demo-item-block'>E</div>
          </Grid.Item>
        </Grid>
    </div>
  )
}

export default Home
