package com.example.common.entity;

import com.example.common.Title;

import javax.persistence.*;

/**
 * Created by Anatol on 10.06.16.
 */
@Entity
@Table(name = "achieve")
public class Achieve extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @Enumerated(EnumType.STRING)
    @Column
    private Title title;

    public User getUser() {
        return user;
    }

    public User setUser(User user) {
        this.user = user;
        return user;
    }

    public Title getTitle() {
        return title;
    }

    public void setTitle(Title title) {
        this.title = title;
    }
}

