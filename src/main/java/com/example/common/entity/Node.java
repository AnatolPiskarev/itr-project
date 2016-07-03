package com.example.common.entity;

import javax.persistence.*;

@Entity
@Table(name = "node")
public class Node extends BaseEntity {
    @Column(nullable = false)
    private Long schemeId;
    @Column(nullable = false)
    private Long xCoordinate;
    @Column(nullable = false)
    private Long yCoordinate;

    public Long getSchemeId() {
        return schemeId;
    }

    public void setSchemeId(Long schemeId) {
        this.schemeId = schemeId;
    }

    public Long getxCoordinate() {
        return xCoordinate;
    }

    public void setxCoordinate(Long xCoordinate) {
        this.xCoordinate = xCoordinate;
    }

    public Long getyCoordinate() {
        return yCoordinate;
    }

    public void setyCoordinate(Long yCoordinate) {
        this.yCoordinate = yCoordinate;
    }
}
