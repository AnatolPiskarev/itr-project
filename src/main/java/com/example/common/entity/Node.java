package com.example.common.entity;

import javax.persistence.*;

@Entity
@Table(name = "node")
public class Node extends BaseEntity {
    @Column(nullable = false)
    private Long schemeId;
    @Column(nullable = false)
    private Long xBeginCoordinate;
    @Column(nullable = false)
    private Long yBeginCoordinate;

    public Long getSchemeId() {
        return schemeId;
    }

    public void setSchemeId(Long schemeId) {
        this.schemeId = schemeId;
    }

    public Long getxBeginCoordinate() {
        return xBeginCoordinate;
    }

    public void setxBeginCoordinate(Long xBeginCoordinate) {
        this.xBeginCoordinate = xBeginCoordinate;
    }

    public Long getyBeginCoordinate() {
        return yBeginCoordinate;
    }

    public void setyBeginCoordinate(Long yBeginCoordinate) {
        this.yBeginCoordinate = yBeginCoordinate;
    }
}
