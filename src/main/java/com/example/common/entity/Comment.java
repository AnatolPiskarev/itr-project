package com.example.common.entity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Anatol on 10.06.16.
 */
@Entity
@Table(name = "comment")
public class Comment extends BaseEntity {

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToOne
    @JoinColumn(name = "scheme_id", nullable = false)
    private Scheme scheme;

    @Column(nullable = false)
    private String commentary;

    @OneToMany(mappedBy = "commentId", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Like> likes;

    public User getUser() {
        return user;
    }

    public List<Like> getLikes() {
        return likes;
    }

    public void setLikes(List<Like> likes) {
        this.likes = likes;
    }

    public User setUser(User user) {
        this.user = user;
        return user;
    }

    public Scheme getScheme() {
        return scheme;
    }

    public Scheme setScheme(Scheme scheme) {
        this.scheme = scheme;
        return scheme;
    }


    public String getCommentary() {
        return commentary;
    }

    public String setCommentary(String commentary) {
        this.commentary = commentary;
        return commentary;
    }
}
