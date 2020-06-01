import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

export interface Blog {
id?: any;
name: string;
title: string;
notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public blog$: Observable<Blog[]>;
  public blogCollection: AngularFirestoreCollection<Blog>;

  constructor(private afStore: AngularFirestore,
              private auth: AuthService) {
    const uid = this.auth.cUid;
    this.blogCollection = this.afStore.collection<Blog>('blogs');
  //  const blogCll = this.afStore.collection<Userelement>('users').doc(uid).collection<Blog>('blogs');
    this.blog$ = this.blogCollection.snapshotChanges().pipe(
      map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
        });
      })
    );
  }

  getBlogs(): Observable<Blog[]> {
    return this.blog$;
  }

  oneBlog(id: string): Observable<Blog> {
    return this.blogCollection.doc<Blog>(id).valueChanges().pipe(
      take(1),
      map( blog => {
        blog.id = id;
        console.log(blog);
        return blog;
        })
      );
  }

  addBlog(blog: Blog): Promise<DocumentReference> {
    return this.blogCollection.add(blog);
  }

  updateBlog(blog: Blog): Promise<void> {
    return this.blogCollection.doc(blog.id).update({
      name: blog.name,
      title: blog.title,
      notes: blog.notes
    });
  }

  deleteBlog(id: string): Promise<void> {
    return this.blogCollection.doc(id).delete();
}


}
