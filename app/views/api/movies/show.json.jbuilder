json.extract! @movie, :id, :title, :year, :score, :reviews, :ratings
json.posterUrl url_for(@movie.poster) if @movie.poster.attached?
json.trailerUrl url_for(@movie.trailer) if @movie.trailer.attached?