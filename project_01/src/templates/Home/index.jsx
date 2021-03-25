import './styles.css';

import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    
    this.setState({
      ...this.state,
      posts: postsAndPhotos.slice(page, page + postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue : value });
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? //If searchValue is true do it ... if is false do it ... (Operação ternaria) 
    posts.filter(post => { //Filters the posts
      return post.title.toLowerCase().includes( //return the posts with to lowercase letters
        searchValue.toLowerCase() //The value search in input
      )
    })
    : posts; 

    return (
      <section className="container">
        <div class="search-container">
          {!!searchValue && (
            <h1>Search value: {searchValue}</h1>
          )}
        
        <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
        </div>

        {filteredPosts.length > 0 && (        //If filteredPosts is greater than 0 
          <Posts posts={filteredPosts} />     //show posts
        )}

        {filteredPosts.length === 0 && (      //If filteredPosts is = 0
          <p>Não existem posts</p>          //show the message
        )}
        
        <div className="button-container">
          {!searchValue && (
            <Button
            text="Load more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
          )}
          
        </div>
      </section>
    );
  }
}