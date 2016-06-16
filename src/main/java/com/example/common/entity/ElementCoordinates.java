package com.example.common.entity;

import com.example.common.Rotation;

import javax.persistence.*;

/**
 * Created by Anatol on 11.06.16.
 */
@Entity
@Table(name = "elementCoordinates")
public class ElementCoordinates extends  BaseEntity {
    @Column(nullable = false)
    private Long schemeId;
    @OneToOne
    @JoinColumn(name = "element_id", nullable = false)
    private Element element;
    @Column(nullable = false)
    private Long xCoordinate;
    @Column(nullable = false)
    private Long yCoordinate;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Rotation rotation = Rotation.ROTATION_RIGHT;

    public Rotation getRotation() {
        return rotation;
    }

    public void setRotation(Rotation rotation) {
        this.rotation = rotation;
    }

    public Long getSchemeId() {
        return schemeId;
    }

    public void setSchemeId(Long schemeId) {
        this.schemeId = schemeId;
    }

    public Element getElement() {
        return element;
    }

    public void setElement(Element element) {
        this.element = element;
    }

    public Long getxCoordinate() {
        return xCoordinate;
    }

    public Long setxCoordinate(Long xCoordinate) {
        this.xCoordinate = xCoordinate;
        return xCoordinate;
    }

    public Long getyCoordinate() {
        return yCoordinate;
    }

    public Long setyCoordinate(Long yCoordinate) {
        this.yCoordinate = yCoordinate;
        return yCoordinate;
    }
}
