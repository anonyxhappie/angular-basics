import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {

	name: string;
	email: string;
	address: address;
	hobbies: string[];
  isHobbies: boolean;
  posts: Post[];

	constructor(private postsService: PostsService){

		this.name = 'Akshay Saini';
		this.email = 'anonyxhappie@gmail.com';
		this.address = {
			town: 'Losal',
			city: 'Sikar',
			state: 'Raj'
		};
		this.hobbies = ['Eat', 'Sleep', 'Code'];
    this.isHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
	}

  toggleHobbies(){
      this.isHobbies = !this.isHobbies;
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }
}

interface address {
	town: string;
	city: string;
	state: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
}
