package com.example.common.entity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Anatol on 12.06.16.
 */
@Entity
@Table(name = "scheme_rating",uniqueConstraints = @UniqueConstraint(columnNames={"userId", "schemeId"}))
public class SchemeRating extends BaseEntity {
    @Column(nullable = false)
    private Integer value;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private Long schemeId;

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getSchemeId() {
        return schemeId;
    }

    public void setSchemeId(Long schemeId) {
        this.schemeId = schemeId;
    }
}
