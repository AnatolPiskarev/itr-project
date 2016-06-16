package com.example.common.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/**
 * Created by Anatol on 12.06.16.
 */
@Entity
@Table(name = "comment_like",uniqueConstraints = @UniqueConstraint(columnNames={"userId", "commentId"}))
public class Like extends BaseEntity {

        @Column(nullable = false)
        private Boolean isLike = true;

        @Column(nullable = false)
        private Long userId;

        @Column(nullable = false)
        private Long commentId;

    public Boolean getLike() {
        return isLike;
    }

    public void setLike(Boolean like) {
        this.isLike = like;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }
}
