package com.example.common.entity;

import javax.persistence.*;

/**
 * Created by Anatol on 11.06.16.
 */
@Entity
@Table(name = "line")
public class Line extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "scheme_id", nullable = false)
    private Scheme scheme;
    @Column(nullable = false)
    private Long xBeginCoordinate;
    @Column(nullable = false)
    private Long yBeginCoordinate;
    @Column(nullable = false)
    private Long xEndCoordinate;
    @Column(nullable = false)
    private Long yEndCoordinate;

    public Scheme getScheme() {
        return scheme;
    }

    public Scheme setScheme(Scheme scheme) {
        this.scheme = scheme;
        return scheme;
    }

    public Long getxBeginCoordinate() {
        return xBeginCoordinate;
    }

    public Long setxBeginCoordinate(Long xBeginCoordinate) {
        this.xBeginCoordinate = xBeginCoordinate;
        return xBeginCoordinate;
    }

    public Long getyBeginCoordinate() {
        return yBeginCoordinate;
    }

    public Long setyBeginCoordinate(Long yBeginCoordinate) {
        this.yBeginCoordinate = yBeginCoordinate;
        return yBeginCoordinate;
    }

    public Long getxEndCoordinate() {
        return xEndCoordinate;
    }

    public Long setxEndCoordinate(Long xEndCoordinate) {
        this.xEndCoordinate = xEndCoordinate;
        return xEndCoordinate;
    }

    public Long getyEndCoordinate() {
        return yEndCoordinate;
    }

    public Long setyEndCoordinate(Long yEndCoordinate) {
        this.yEndCoordinate = yEndCoordinate;
        return yEndCoordinate;
    }
}
