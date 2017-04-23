import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { loadPosts } from '../actions'
import { connect } from 'react-redux'
import PostListItem from '../components/PostListItem'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
import { selectPosts } from '../reducer'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});
const gridstyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};
const redial = {
  fetch: ({ dispatch }) => dispatch(loadPosts())
}

const mapStateToProps = state => ({
  posts: selectPosts(state)
})

const old = ({ posts }) => (
  <div className={css(styles.root)}>
    <Helmet title='Posts' />
    {posts.isLoading &&
      <div>
        <h2 className={css(styles.title)}>Loading....</h2>
      </div>}
    {!posts.isLoading &&
      posts.data.map((post, i) => <PostListItem key={post.id} post={post} />)}
  </div>
)


const PostListPage = ({ posts }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
<div style={styles.root} className={css(styles.root)}>
    <Helmet title='Posts' />
    {posts.isLoading &&
    <div>
      <h2 className={css(styles.title)}>Loading....</h2>
    </div>}
    <GridList
      cellHeight={180}
      style={gridstyles.gridList}
    >
      {!posts.isLoading &&
      posts.data.map((post, i) =>
        <GridTile
          key={post.PhotoLarge}
          title={post.title}
          subtitle={<span>by <b>{post.ListPrice}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        ><PostListItem key={post.id} post={post} />
          <img src={post.PhotoLarge} />
        </GridTile>
      )}
    </GridList>
</div></MuiThemeProvider>
);
PostListPage.PropTypes = {
  posts: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 500
  },
  title: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#b7b7b7'
  }
})
export default provideHooks(redial)(connect(mapStateToProps)(PostListPage))
